using Microsoft.AspNetCore.Mvc;

namespace KPIProject.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuController: Controller
    {

        [HttpGet]
        [Route("GetLastStatusOfTask/")]
        public async Task<IActionResult> FGetLastStatusOfTask()
        {
            return Ok( 5545);
        }

    }
}
