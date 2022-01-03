import pandas as pd
from pytrends.request import TrendReq
import matplotlib.pyplot as plt
from typing import Dict

class Service:
    trends = None
    time_trend = None

    def __init__(self) -> None:
        self.trends = TrendReq()
        self.time_trend = TrendReq(hl='en-US', tz=360)

    def get_data_by_region(self, keyword: str) -> Dict:
        self.trends.build_payload(kw_list=[keyword])
        data = self.trends.interest_by_region()
        data.rename(columns={keyword: "keyword"}, inplace=True)
        data = data.sort_values(by="keyword", ascending=False)
        data = data.head(25).reset_index()
        graph = {
            "entity_name": "Region-wise interest",
            "labels": data["geoName"].tolist(),
            "series": data["keyword"].tolist(),
            "property": "Google Search Analytics Region-wise",
        }
        return graph
    

    def get_data_by_time(self, keyword: str) -> Dict:
        self.time_trend.build_payload(kw_list=[keyword])
        data = self.time_trend.interest_over_time().reset_index()
        data.rename(columns={keyword: "keyword"}, inplace=True)
        graph = {
            "entity_name": "Trend over years",
            "labels": data["date"].dt.strftime("%Y-%m-%d").tolist(),
            "series": data["keyword"].tolist(),
            "property": "Google Search Analytics previous trends",
        }
        return graph