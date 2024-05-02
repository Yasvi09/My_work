import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
df=pd.read_csv('D:\\Datasets\\auto-mpg.csv')
pd.plotting.scatter_matrix(df,figsize=[15,15],marker='v',alpha=0.7)
plt.show()
