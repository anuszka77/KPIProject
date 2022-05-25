using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using KPIProject.DataCore.Models;

namespace KPIProject.DataCore.ProcessBookContext
{
    public partial class ProcessBookContext : DbContext
    {
        #region Fields

        private const string shema = "Pb";

        #endregion Fields

        #region Constructors

        public ProcessBookContext()
        {
        }

        public ProcessBookContext(DbContextOptions<ProcessBookContext> options)
            : base(options)
        {
        }


        #endregion Constructors

        #region Properties
        public virtual DbSet<DimensionsDictionary> DimensionsDictionary { get; set; } = null!;

        public IQueryable<FGetListOfProcess_Result> FGetListOfProcess() => FromExpression(() => FGetListOfProcess());
        public IQueryable<FGetTierListByDim_Result> FGetTierListByDim(short? dimensionId) => FromExpression(() => FGetTierListByDim(dimensionId));

        public IQueryable<FGetListOfColumToShowByRole_Result> FGetListOfColumToShowByRole(short idDatabaseObject, byte roleId ) => FromExpression(() => FGetListOfColumToShowByRole(idDatabaseObject, roleId));

        public IQueryable<FGetListOfProcessActivity_Result> FGetListOfProcessActivity() => FromExpression(() => FGetListOfProcessActivity());

        public IQueryable<FGetListOfProcessLayers_Result> FGetListOfProcessLayers() => FromExpression(() => FGetListOfProcessLayers());

        public IQueryable<FGetProcessActivityDiagramTier_Result> FGetProcessActivityDiagramTier(int? processId) => FromExpression(() => FGetProcessActivityDiagramTier(processId));


        //Proste słowniki_start
        public IQueryable<FGetListOfNameSimpleDictionary_Result> FGetListOfNameSimpleDictionary() => FromExpression(() => FGetListOfNameSimpleDictionary());
        public IQueryable<FGetListOfActivityHierarchyDictionary_Result> FGetListOfActivityHierarchyDictionary() => FromExpression(() => FGetListOfActivityHierarchyDictionary());
        public IQueryable<FGetListOfBussinesValueAddedDictionary_Result> FGetListOfBussinesValueAddedDictionary() => FromExpression(() => FGetListOfBussinesValueAddedDictionary());
        public IQueryable<FGetListOfCriticalToDictionary_Result> FGetListOfCriticalToDictionary() => FromExpression(() => FGetListOfCriticalToDictionary());
        public IQueryable<FGetListOfDepartmentDictionary_Result> FGetListOfDepartmentDictionary() => FromExpression(() => FGetListOfDepartmentDictionary());
        public IQueryable<FGetListOfKpiDictionary_Result> FGetListOfKpiDictionary() => FromExpression(() => FGetListOfKpiDictionary());
        public IQueryable<FGetListOfSystemDictionary_Result> FGetListOfSystemDictionary() => FromExpression(() => FGetListOfSystemDictionary());
        //Proste słowniki_end

        public IQueryable<FGetLayersBySysDimTier_Result> FGetLayersBySysDimTier(short systemId, byte dimensionId, byte tierId) => FromExpression(() => FGetLayersBySysDimTier(systemId,dimensionId,tierId));

        #endregion Properties

        #region Methods



        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    if (!optionsBuilder.IsConfigured)
        //    {
        //        optionsBuilder.UseSqlServer("Server=youkpi.database.windows.net; Database=ProcessBook; User ID=admin@4ycoffice.onmicrosoft.com@youkpi; Password=nowaSPOLKA2019*-; Trusted_Connection=False;");
        //    }
        //}



        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.HasDefaultSchema(shema);

            modelBuilder.UseCollation("Polish_CI_AS");

            modelBuilder.Entity<FGetListOfProcess_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfProcess))).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfProcessActivity_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfProcessActivity))).HasSchema("PbApp");

            modelBuilder.Entity<FGetTierListByDim_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetTierListByDim), new[] { typeof(short?) })).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfColumToShowByRole_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfColumToShowByRole), new[] { typeof(short), typeof(byte) })).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfProcessLayers_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfProcessLayers))).HasSchema("PbApp");

            modelBuilder.Entity<FGetProcessActivityDiagramTier_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetProcessActivityDiagramTier), new[] { typeof(int?) })).HasSchema("PbApp");

            //Proste słowniki_start
            modelBuilder.Entity<FGetListOfNameSimpleDictionary_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfNameSimpleDictionary))).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfActivityHierarchyDictionary_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfActivityHierarchyDictionary))).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfBussinesValueAddedDictionary_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfBussinesValueAddedDictionary))).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfCriticalToDictionary_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfCriticalToDictionary))).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfDepartmentDictionary_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfDepartmentDictionary))).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfKpiDictionary_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfKpiDictionary))).HasSchema("PbApp");

            modelBuilder.Entity<FGetListOfSystemDictionary_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetListOfSystemDictionary))).HasSchema("PbApp");
            //Proste słowniki_end

            modelBuilder.Entity<FGetLayersBySysDimTier_Result>().HasNoKey();
            modelBuilder.HasDbFunction(typeof(ProcessBookContext)?.GetMethod(nameof(FGetLayersBySysDimTier), new[] { typeof(short), typeof(byte), typeof(byte) } )).HasSchema("PbApp");




            modelBuilder.Entity<DimensionsDictionary>(entity =>
            {
                entity.HasKey(e => e.IdDimension)
                    .HasName("PK_DimensionsDictionary_IdDimension");

                entity.ToTable("DimensionsDictionary", "Pb");

                entity.ToTable(tb => tb.IsTemporal(ttb =>
                {
                    ttb.UseHistoryTable("DimensionsDictionaryHistory", "Pb");
                    ttb
                        .HasPeriodStart("SysStartTime")
                        .HasColumnName("SysStartTime");
                    ttb
                        .HasPeriodEnd("SysEndTime")
                        .HasColumnName("SysEndTime");
                }
             ));

                entity.Property(e => e.DimensionDescription).HasMaxLength(512);

                entity.Property(e => e.DimensionName).HasMaxLength(64);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
        #endregion Methods

    }
}
