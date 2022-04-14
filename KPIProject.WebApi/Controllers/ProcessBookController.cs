using AutoMapper;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.DTO.Menu;
using KPIProject.RepositoriesInterfaces;
using KPIProject.ServicesInterfaces;
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
        private readonly IProcessBookService processBookService;
        //do usuniecia! mappery dodamy w Service!!!!!!!!!!

        public ProcessBookController(ProcessBookContext context, IProcessBookRepository processBookRepository, IProcessBookService processBookService )
        {
            this.context = context;
            this.processBookRepository = processBookRepository;
            this.processBookService = processBookService;
        }

       
        [HttpGet]
        [Route("GetProcessBook")]
        public async Task<IActionResult> FGetListOfProcess()=> Ok(await processBookRepository.GetAll());

        [HttpGet]
        [Route("GetListOfColumnToShow/{idDatabaseObject:int}/{roleId:int}")]
        public async Task<IActionResult> FGetListOfColumnToShowByRole(short idDatabaseObject, byte roleId) => Ok(await processBookService.GetListOfColumnToShowByRole(idDatabaseObject, roleId));

        [HttpGet]
        [Route("GetListOfProcessActivity")]
        public async Task<IActionResult> FGetListOfProcessActivity() => Ok(await processBookService.GetListOfProcessActivity());

        [HttpGet]
        [Route("GetListOfProcessLayers")]
        public async Task<IActionResult> FGetListOfProcessLayers() => Ok(await processBookService.GetListOfProcessLayers());


    }
}
