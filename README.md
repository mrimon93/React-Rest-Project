# Financial Tracker Project

## Overview

The Financial Tracker project is a simple web application that allows users to input and track their financial transactions, specifically assets and liabilities. The project consists of a frontend built with React and TypeScript, and a backend implemented with .NET Core, utilizing RESTful APIs to store and retrieve financial data. The application enables users to insert the value of assets or liabilities, with the system automatically tracking the day of insertion.

## Features

- **Insert Asset:** Users can input the value of assets, and the system records the transaction along with the current date.

- **Insert Liability:** Users can input the value of liabilities, and the system records the transaction along with the current date.

- **Display Current Day:** The application provides a display of the current day, helping users keep track of when transactions occurred.

## Tech Stack

- **Frontend:**
  - [React](https://reactjs.org/)
  - [TypeScript](https://www.typescriptlang.org/)
  - Fetch API for communication with the backend

- **Backend:**
  - [.NET Core](https://dotnet.microsoft.com/)
  - RESTful APIs for handling transactions
  - In-memory storage for simplicity (can be extended to use a database like Azure SQL)

- **Docker:** The project includes a Dockerfile for containerization.

- **Database:** The project can be configured to use [Microsoft Azure SQL Database](https://azure.microsoft.com/en-us/services/sql-database/) for persistent storage.

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/financial-tracker.git
   cd financial-tracker
