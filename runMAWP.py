from interpreter import run_mawp

code = "[!:1M!9A?.%]"
input_ = ""
DEBUG = False
DELAY = 0

try:
    run_mawp(code,input_,DEBUG,DELAY)
except:
    raise Exception("MAWP MAWP MAWP")