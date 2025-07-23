using BackendApi.Configurations.Cors.Extensions;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCustomCorsPolicy();
builder.Services.AddControllers();

var app = builder.Build();

app.UseCors("HomologPolicy");
app.MapControllers();

app.Run();
