using AutoMapper;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.DTO.Menu;
using KPIProject.RepositoriesInterfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KPIProject.WebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProcessBookController: Controller
    {
        private readonly ProcessBookContext context;
        private readonly IProcessBookRepository processBookRepository;
        //do usuniecia! mappery dodamy w Service!!!!!!!!!!

        public ProcessBookController(ProcessBookContext context, IProcessBookRepository processBookRepository)
        {
            this.context = context;
            this.processBookRepository = processBookRepository;
        }

       
        [HttpGet]
        [Route("GetProcessBook")]
        public async Task<IActionResult> FGetListOfProcess()=> Ok(await processBookRepository.GetAll());
        
    }
}
