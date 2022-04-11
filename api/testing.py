from requests import get
import bs4

# https://chips.ucla.edu

r = get('https://chips.ucla.edu/students')
soup = bs4.BeautifulSoup(r.text, 'lxml')
faculty = [x for x in soup.findAll('div', {'class': 'media'})]

# How to easily convert to JSON?
# Bruteforce
studentsJSON = [{}]
studentKeys = ['name', 'major', 'primary_area',
               'years', 'email', 'linkedin']
for i in range(len(faculty)):
    for j, value in enumerate(faculty[i].findAll('p')):
        if (value == ' '):
            studentsJSON[i][studentKeys[j]] = None
        elif (value):
            studentsJSON[i][studentKeys[j]] = value.text
        print(j, value.text, end='\n*************************\n')
    print('-------------------------------')

print(studentsJSON)
