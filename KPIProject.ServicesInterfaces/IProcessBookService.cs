using KPIProject.DTO.Menu;

namespace KPIProject.ServicesInterfaces
{
    public interface IProcessBookService
    {
        Task<IEnumerable<FGetListOfColumToShowByRole_ResultDTO>> GetListOfColumnToShowByRole(short idDatabaseObject, byte roleId);
        Task<IEnumerable<FGetListOfProcessActivity_ResultDTO>> GetListOfProcessActivity();
        Task<IEnumerable<FGetListOfProcessLayers_ResultDTO>> GetListOfProcessLayers();
    }
}