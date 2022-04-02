using System.Linq.Expressions;

namespace KPIProject.RepositoriesInterfaces
{
    public interface IReadOnlyRepositoryBase<TDto>
    {
        Task<TDto?> FindByConditionAsync(Expression<Func<TDto?, bool>> expression);
        Task<IEnumerable<TDto>> GetAllAsync();
    }
}