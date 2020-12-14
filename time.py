from datetime import datetime
import pyperclip
# import os
from datetime import datetime
time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
# 保存到剪切板中
pyperclip.copy(time)