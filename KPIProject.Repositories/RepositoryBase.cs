using AutoMapper;
using KPIProject.DataCore.ProcessBookContext;


namespace KPIProject.Repositories
{
    public abstract class RepositoryBase<TEntity, TDto> : ReadOnlyRepositoryBase<TEntity, TDto> where TEntity : class
    {
        #region Constructors

        protected RepositoryBase(ProcessBookContext context, IMapper mapper) : base(context, mapper)
        {
        }

        #endregion Constructors

        #region Methods

        /// <summary>
        /// Create entity entries
        /// </summary>
        /// <param name="entity">Entity entries</param>
        /// <returns>A task that represents the asynchronous operation</returns>
        public virtual async Task Create(TDto entity)
        {
            var record = mapper.Map<TEntity>(entity);
            await dbSet.AddAsync(record);
        }

        /// <summary>
        /// Delete entity entries by the passed predicate
        /// </summary>
        /// <param name="entity">Record to be deleted</param>
        /// <returns>
        /// A task that represents the asynchronous operation
        /// </returns>
        public virtual async Task DeleteAsync(TDto entity)
        {
            var record = mapper.Map<TEntity>(entity);
            await Task.FromResult(dbSet.Remove(record));
        }

        /// <summary>
        /// Update entity entries
        /// </summary>
        /// <param name="entity">Entity entries</param>
        /// <returns>A task that represents the asynchronous operation</returns>
        public virtual async Task UpdateAsync(TDto entity)
        {
            var record = mapper.Map<TEntity>(entity);
            await Task.FromResult(dbSet.Update(record));
        }

        /// <summary>
        /// Saves all changes made in this context to the database.
        /// </summary>
        /// <param name="cancellationToken">
        ///     A System.Threading.CancellationToken to observe while waiting for the task to
        ///   complete.</param>
        /// <returns> A task that represents the asynchronous save operation. The task result contains  the number of state entries written to the database.</returns>
        public virtual async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            return await this.context.SaveChangesAsync(cancellationToken);
        }

        #endregion Methods
    }
}