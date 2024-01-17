using System;
using System.Collections.Generic;
using FinancialTracker.Models;

namespace FinancialTracker.Services
{

    public class TransactionService
    {
        private List<Transaction> transactions = new List<Transaction>();
        private int currentDay = 1;

        public void InsertAsset(decimal value)
        {
            transactions.Add(new Transaction {Id = transactions.Count + 1, Value = value, Type = "Asset", Date= DateTime.Now});
        }

         public void InsertLiability(decimal value)
        {
            transactions.Add(new Transaction {Id = transactions.Count + 1, Value = value, Type = "Liability", Date= DateTime.Now});
        }

        public int GetCurrentDay()
        {
            return currentDay;
        }
    }
}

