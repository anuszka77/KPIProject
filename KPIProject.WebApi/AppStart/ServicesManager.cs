using KPIProject.Services;
using KPIProject.ServicesInterfaces;

namespace KPIProject.WebApi.AppStart
{
    public static class ServicesManager
    {
        #region Methods

        public static IServiceCollection AddServices(this IServiceCollection services)
        {
            services.AddTransient<IDictionaryService, DictionaryService>();


            return services;
        }

        #endregion Methods
    }
}
