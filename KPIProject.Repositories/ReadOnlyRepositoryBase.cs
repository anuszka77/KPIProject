using AutoMapper;
using KPIProject.DataCore.ProcessBookContext;
using KPIProject.RepositoriesInterfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;


namespace KPIProject.Repositories
{
    public abstract class ReadOnlyRepositoryBase<TEntity, TDto> : IReadOnlyRepositoryBase<TDto> where TEntity : class
    {
        #region Fields

        protected readonly ProcessBookContext context;

        protected readonly IMapper mapper;

        protected Microsoft.EntityFrameworkCore.DbSet<TEntity> dbSet;

        #endregion Fields

        #region Constructors

        public ReadOnlyRepositoryBase(ProcessBookContext context, IMapper mapper)
        {
            this.context = context;
            this.mapper = mapper;
            this.dbSet = this.context.Set<TEntity>();
        }

        #endregion Constructors

        #region Methods

        /// <summary>
        /// Returns the first element of a sequence that satisfies a specified
        /// condition or a default value if no such element is found.
        /// </summary>
        /// <param name="expression">A function to test each element for a condition</param>
        /// <returns>
        /// A task that represents the asynchronous operation
        /// The task result contains the number of deleted records
        ///     (TEntity) if source is empty or if no element passes the test specified by
        ///     predicate ; otherwise, the first element in source that passes the test specified
        ///     by predicate.
        /// </returns>
        public virtual async Task<TDto?> FindByConditionAsync(Expression<Func<TDto?, bool>> expression)
        {
            return await mapper.ProjectTo<TDto?>(dbSet).FirstOrDefaultAsync(expression);
        }

        /// <summary>
        /// Returns a System.Collections.Generic.List of (TEntity)
        /// </summary>
        /// <returns>
        /// A task that represents the asynchronous operation
        /// Returns a System.Collections.Generic.List of (TEntity)
        /// </returns>

        public virtual async Task<IEnumerable<TDto>> GetAllAsync()
        {
            return await mapper.ProjectTo<TDto>(dbSet).ToListAsync();
        }

        #endregion Methods
    }
}