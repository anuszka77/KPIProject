
using KPIProject.DataCore.ProcessBookContext;
using Microsoft.EntityFrameworkCore;

namespace KPIProject.WebApi.AppStart
{
    public static class DbContextInitializer
    {
        #region Methods

        public static IServiceCollection AddDbContext(this IServiceCollection services)
        {
            var provider = services.BuildServiceProvider();

            var dependency = provider.GetRequiredService<Settings>();

            //string? connectionString = dependency?.GetSettings?.ConnectionStrings?.SzzManager;
            string? connectionString = dependency?.ConnectionStrings?.ProcessBook;
            services.AddDbContext<ProcessBookContext>(options =>
            options.UseSqlServer(connectionString,
                       sqlServerOptions => sqlServerOptions.CommandTimeout(1200)));

            Console.WriteLine("Connect to: " + connectionString);
            return services;
        }

        #endregion Methods
    }
}
