using AutoMapper;
using KPIProject.DataCore.Models;
using KPIProject.DTO.Menu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.Mapper.Profiles
{
    public class MenuProfile: Profile
    {
        #region Constructors

        public MenuProfile()
        {
            CreateMap<DimensionsDictionary, DimensionsDictionaryDTO > ().ReverseMap();
        }

        #endregion Constructors
    }
}
