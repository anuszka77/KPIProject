using KPIProject.Repositories;
using KPIProject.RepositoriesInterfaces;

namespace KPIProject.WebApi.AppStart
{
    public static class RepositoriesManager
    {
        #region Methods

        public static IServiceCollection AddRepositories(this IServiceCollection services)
        {
            services.AddScoped<IProcessBookRepository, ProcessBookRepository>();



            return services;
        }

        #endregion Methods
    }
}