import pandas as pd


def fillna():
    df = pd.read_csv("open-powerlifting.csv", header=0, index_col=0)
    df = df.fillna("null")
    df.to_csv("open-powerlifting-fillna.csv", header=False)


def sampling():
    df = pd.read_csv("open-powerlifting-fillna.csv", header=0, index_col=0)
    df = df.sample(frac=0.1, replace=False, random_state=42)
    df.to_csv("open-powerlifting-sampling.csv", header=False)


# fillna()
# sampling()
