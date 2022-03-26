using Microsoft.AspNetCore.Authentication.Negotiate;
using Microsoft.AspNetCore.Server.IISIntegration;

namespace KPIProject.WebApi.AppStart
{
    public static class SecurityAndIdentityManager
    {
        #region Fields

        private const string CORS_POLICY = "AllowAll";

        #endregion Fields

        #region Methods

        public static IServiceCollection SetAuthentication(this IServiceCollection services)
        {
            services.AddAuthentication(NegotiateDefaults.AuthenticationScheme).AddNegotiate();
            services.AddAuthentication(IISDefaults.AuthenticationScheme).AddCookie();
            //services.AddSingleton<ValidateAuthentication>();
            return services;
        }

        public static void SetApplicationCors(this IApplicationBuilder app)
        {
            app.UseCors(CORS_POLICY);
        }

        public static IServiceCollection SetServicesCors(this IServiceCollection services)
        {
            var provider = services.BuildServiceProvider();

            var dependency = provider.GetRequiredService<Settings>();

            services.AddCors(a =>
            a.AddPolicy(CORS_POLICY, opts =>
            {
                opts.WithOrigins(dependency.CorsParams.AllowedHosts)
                .AllowAnyHeader()
                .AllowCredentials()
                .AllowAnyMethod();
            }));
            return services;
        }

        #endregion Methods
    }
}

