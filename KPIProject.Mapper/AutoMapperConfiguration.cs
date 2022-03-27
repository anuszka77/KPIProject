using AutoMapper;
using Microsoft.Extensions.DependencyInjection;
using System.Reflection;

namespace KPIProject.Mapper
{
    public static class AutoMapperConfiguration
    {
        #region Methods

        public static IServiceCollection InitAutoMapper(this IServiceCollection services)
        {
            var assembly = Assembly.GetExecutingAssembly();
            var configuration = new MapperConfiguration(cfg => cfg.AddMaps(assembly));
            services.AddSingleton(s => configuration.CreateMapper());
            return services;
        }

        #endregion Methods
    }
}