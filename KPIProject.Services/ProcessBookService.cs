using KPIProject.DataCore.ProcessBookContext;
using KPIProject.ServicesInterfaces;

namespace KPIProject.Services
{
    public class ProcessBookService: IProcessBookService
    {
        private readonly ProcessBookContext context;
        //private readonly  stockingUpOrderLimitRepository;
       

        public ProcessBookService(ProcessBookContext context)
        {
            this.context = context;
           
        }
    }
}