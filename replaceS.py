import pyperclip
import re

text = pyperclip.paste()

newText = text.replace('    ', '  ')
pyperclip.copy(newText)
