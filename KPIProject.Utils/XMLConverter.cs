using System.Xml.Serialization;

namespace KPIProject.Utils
{
    public static class XMLConverter
    {
        public static List<T?> DeSerializeFromXML<T>(this string? xmlDocument)
        {
            var ba = typeof(T);
            if (string.IsNullOrEmpty(xmlDocument))
                return default;
            XmlSerializer serializer = new XmlSerializer(typeof(List<T>), new XmlRootAttribute("Data"));
            StringReader stringReader = new StringReader(xmlDocument);
            var a = (List<T?>)serializer.Deserialize(stringReader);
            return a;
        }


       
    }
}