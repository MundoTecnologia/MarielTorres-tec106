import pyautogui
import webbrowser
import urllib.parse
from time import sleep
from typing import List
from ..schemas.schema_request import Sch_Request


async def Ser_send_sms_from_whatsapp(listUser: List[Sch_Request]):
    
    webbrowser.open("https://web.whatsapp.com")
    sleep(60)  

    for user in listUser:
        try:
            
            message = urllib.parse.quote(f"*Olá {user.name}*, tudo bem?! Uma das empresas em que você é seguir na plataforma workLink acabou de publicar uma vaga, inicie a tua sessão para se candidatar!")
            link = f"https://web.whatsapp.com/send?phone=244{user.phone}&text={message}"
            webbrowser.open(link)
            sleep(50)  

            
            pyautogui.hotkey("enter")
            sleep(25)  

            
            pyautogui.hotkey("ctrl", "w")
            sleep(25)  

        except Exception as e:
            
            print(f"Não foi possível enviar o SMS para o número {user.phone}: {e}")
            sleep(7)
            
            pyautogui.hotkey("ctrl", "w")
            sleep(7)

    return listUser
