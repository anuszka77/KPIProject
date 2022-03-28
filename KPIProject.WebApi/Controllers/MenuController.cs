using AutoMapper;
using KPIProject.DataCore.ContextTemp;
using KPIProject.DTO.Menu;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KPIProject.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MenuController: Controller
    {
        private readonly ProcessBookContext context;
        //do usuniecia! mappery dodamy w Service!!!!!!!!!!
        protected readonly IMapper mapper;

        public MenuController(ProcessBookContext context, IMapper mapper )
        {
            this.context = context;
            this.mapper = mapper;
        }

        [HttpGet]
        [Route("GetLastStatusOfTask/")]
        public async Task<IActionResult> FGetLastStatusOfTask()
        {
            //return Ok(context.DimensionsDictionaries);

            return Ok(await mapper.ProjectTo<DimensionsDictionaryDTO>(context.DimensionsDictionary).ToListAsync());

        }

    }
}
