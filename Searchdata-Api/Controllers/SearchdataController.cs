using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Searchdata.Models;

namespace Searchdata.Controllers
{
    public class SearchdataController : ApiController
    {
        searchDataEntities db = new searchDataEntities();
     //   [Route("showdata")]
        [HttpGet]
        public IEnumerable<Employee> showdata()
        {
            var a = db.Employees.ToList();
            return a;
        }

     //   [Route("search")]
        //[HttpPost]
        //public IEnumerable<Employee> search(searchdata sd)
        //{
        //       dynamic a = db.Usp_Empsearch(sd.startdate, sd.enddate);
        //       return a;
        //}

        public object search(searchdata sd)
        {
            var a = db.Usp_Empsearch(sd.startdate, sd.enddate);
            return a;
        }
    }
}
