import pandas as pd

df = pd.read_csv("open-powerlifting.csv", header=0, index_col=0)
df = df.fillna("null")
df.to_csv("open-powerlifting-fillna.csv", header=False)
