namespace BackendApi.Configurations.Cors.Extensions
{
    public static class CorsConfigurationPolicyExtension
    {
        public static void AddCustomCorsPolicy(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("HomologPolicy", policy =>
                {
                    policy.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });

                options.AddPolicy("ProductionPolicy", policy =>
                {
                    policy.WithOrigins()
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });
        }
    }
}
