# Traversing The Stock Calculator App.

This project is made in react and dynamically updates the stock chart, financial statements, and calculator based on values passed by the user. It uses an external api called Alpha Vantage which passes a lot of great data but is limited to 5 calls a minnute which can be used up in seconds if the user toggles between the different time periods.

# Income Statements Component

The Income Statements Component is a little tricky but isn't too abstract. The idea was to create a dynamic table given an object with each key being a row and having data for each year in the api. The year is represented as an object but first you have to ket all the keys.

Once you get the keys for each oject then you can return a row for each key and inside that row iterate through each object and return a td with the value of that objects key so if theres 4 years than for each key you will have four values or 4tds. Then you have buttonds to increase and decrease the size of the table. The sheer size of the statement can get very annoying so I thought that providing that funcionality was very ccrucial for the user experience.
