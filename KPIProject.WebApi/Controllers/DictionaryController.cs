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
    public class DictionaryController: Controller
    {
        private readonly ProcessBookContext context;
        private readonly IDictionaryService dictService;

        public DictionaryController(ProcessBookContext context, IDictionaryService dictService)
        {
            this.context = context;
            this.dictService = dictService;
        }

       
        [HttpGet]
        [Route("GetDictDimensions")]
        public async Task<IActionResult> FGetListOfProcess()=> Ok(await dictService.GetDimensionsDictionary());

        [HttpGet]
        [Route("GetTierDictionaryToDimension/{idDimension:int}")]
        public async Task<IActionResult> FGetTierListByDim(short? idDimension) => Ok(await dictService.GetTierDictionaryToDimension(idDimension));

    }
}
