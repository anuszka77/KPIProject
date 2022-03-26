using Microsoft.OpenApi.Models;
using KPIProject;
using KPIProject.WebApi.AppStart;

var builder = WebApplication.CreateBuilder(args);

#if DEBUG
SettingsFilesFactory.CreateSettingsFiles();
#endif

// Add services to the container.

var services = builder.Services;
services.AddSingleton(builder.Configuration.GetSection(nameof(Settings)).Get<Settings>());

//services.AddDbContext();
services.SetAuthentication();
services.SetServicesCors();
services.AddControllers();
services.AddHttpContextAccessor();
services.AddEndpointsApiExplorer();
services.AddSwaggerGen();
//services.InitAutoMapper();
//services.AddAllValidators();
//services.AddRepositories();
//services.AddServices();
//services.AddSignalR();

services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "Some API v1", Version = "v1" });
    // here some other configurations maybe...
   // options.AddSignalRSwaggerGen();
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
}
app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();
app.SetApplicationCors();

app.UseAuthentication();
app.MapControllers();
app.UseAuthorization();
app.Run();


