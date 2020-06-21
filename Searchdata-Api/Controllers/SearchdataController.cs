using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Searchdata.Models;

namespace Searchdata.Controllers
{
    public class SearchdataController : ApiController
    {
        searchDataEntities db = new searchDataEntities();
     //   [Route("showdata")]
     /// <summary>
     ///  Get Data From Table
     /// </summary>
     /// <returns></returns>
        [HttpGet]
        public IEnumerable<Employee> showdata()
        {
            try
            {
                var a = db.Employees.ToList();
                return a;
            }
            catch (Exception ex)
            {

                throw;
            }
        }

        //   [Route("search")]
        //[HttpPost]
        //public IEnumerable<Employee> search(searchdata sd)
        //{
        //       dynamic a = db.Usp_Empsearch(sd.startdate, sd.enddate);
        //       return a;
        //}

        /// <summary>
        /// search Data between two dates 
        /// </summary>
        /// <param name="sd"></param>
        /// <returns></returns>
        public object search(searchdata sd)
        {
            try
            {
                if (sd !=null)
                {
                    var a = db.Usp_Empsearch(sd.startdate, sd.enddate);
                    return a; 
                }
                else
                {
                     throw new HttpException(400, "Bad Request");
                }
            }
            catch (Exception)
            {

                throw;
            }
        }
    }
}
