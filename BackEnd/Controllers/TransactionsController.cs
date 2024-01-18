using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Transactions;
using FinancialTracker.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FinancialTracker.Models;

namespace BackEnd.Controllers
{
    [Route("api/[controller]")]

    [ApiController]

    public class TransactionController : ControllerBase
    {
        public readonly TransactionService _transactionService;

        public TransactionController(TransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        [HttpPost("insertAsset")]
        public IActionResult InsertAsset(decimal value)
        {
            _transactionService.InsertAsset(value);
            return Ok(new { nessage = "Asset inserted successfully." });
        }

        [HttpPost("insertLiability")]
        public IActionResult InsertLiability(decimal value)
        {
            _transactionService.InsertLiability(value);
            return Ok(new { nessage = "Liability inserted successfully." });
        }

        [HttpGet("getCurrentDay")]
        public IActionResult GetCurrentDay()
        {
            var currentDay = _transactionService.GetCurrentDay();
            return Ok(new { day = currentDay });
        }
    }
}