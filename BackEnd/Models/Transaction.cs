using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackEnd.Models
{
    public class Transaction
    {
        public int Id { get; set; }
        public decimal Value { get; set; }
        public string ?Type { get; set; }
        public DateTime Date { get; set; }
        
    }
}