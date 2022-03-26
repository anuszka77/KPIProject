using KPIProject;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.Dynamic;

namespace KPIProject
{
    public class SettingsFilesFactory
    {
        #region Fields

        private const string appSettings = "appsettings.json";
        private const string appSettingsDevelopment = "appsettings.Development.json";
        //private const string appSettingsStaging = "appsettings.Staging.json";

        #endregion Fields

        #region Methods

        public static void CreateSettingsFiles()
        {
            SynchronizationSettingsFiles(appSettings);
            SynchronizationSettingsFiles(appSettingsDevelopment);
            //SynchronizationSettingsFiles(appSettingsStaging);
        }

        private static void SynchronizationSettingsFiles(string appSettings)
        {
            var appSettingsPath = Path.Combine(System.IO.Directory.GetCurrentDirectory(), appSettings);
            var json = File.ReadAllText(appSettingsPath);

            var jsonSettings = new JsonSerializerSettings();
            jsonSettings.Converters.Add(new ExpandoObjectConverter());
            jsonSettings.Converters.Add(new StringEnumConverter());

            dynamic config = JsonConvert.DeserializeObject<ExpandoObject>(json, jsonSettings)!;

            var result = JsonConvert.SerializeObject(config.Settings, Formatting.Indented);
            var settings = JsonConvert.DeserializeObject<Settings>(result);

            config.Settings = settings;

            var newJson = JsonConvert.SerializeObject(config, Formatting.Indented, jsonSettings);

            string workingDirectory = Environment.CurrentDirectory;
            var appSettingsPath2 = Path.Combine(workingDirectory, appSettings);
            File.WriteAllText(appSettingsPath2, newJson);
        }

        #endregion Methods
    }
}