from urllib.request import urlopen, Request
from bs4 import BeautifulSoup
import json



headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'}

url = 'https://www.seriouseats.com/recipes/2012/08/grilled-butterflied-chicken-recipe.html'

class ScrapeTool(): # 

    def __init__(self,urlsDic):
        self.urlsDic = urlsDic
        self.headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2228.0 Safari/537.3'}

    def openJSON(self):
        with open("") as json_file:# arbitrary file name
            data = json.loads(json_file)#dict

        json_file.close() 

        return data  
    
    def desoup(self, url):
        req = Request(url=url,headers=self.headers)
        page = urlopen(req)
        soup = BeautifulSoup(page,'html.parser')

        return soup
    
    def recipeScrape(self, soup):
        content = soup.find_all('p')
        article = ""

        for i in content:
            article = article + " " + i.text
        
        return article

    def createDic(self, inputDic):
        newDic = {}
        for keys in inputDic:
            desouped = self.desoup(inputDic[keys])
            scraped = self.recipeScrape(desouped)
            newDic[keys] = scraped
        return newDic
    
    def exportJSON(self, data):
        with open("", 'w') as outfile:
            json.dump(data,outfile)
        outfile.close()





test = ScrapeTool({'test': url})

print(test.createDic({'test': url, 'test2': 'https://www.seriouseats.com/recipes/2012/08/grilled-butterflied-chicken-recipe.html'}))

