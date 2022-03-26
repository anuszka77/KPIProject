namespace KPIProject
{

    public class Settings
    {
        public ConnectionStrings? ConnectionStrings { get; set; }
        public CorsParams CorsParams { get; set; } = new CorsParams();
    }
}