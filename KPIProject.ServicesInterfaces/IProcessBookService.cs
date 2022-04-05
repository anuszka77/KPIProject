using KPIProject.DTO.Menu;

namespace KPIProject.ServicesInterfaces
{
    public interface IProcessBookService
    {
        Task<IEnumerable<FGetListOfColumToShowByRole_ResultDTO>> GetListOfColumnToShowByRole(short idDatabaseObject, byte roleId);

    }
}