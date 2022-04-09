﻿using KPIProject.DTO.Dictionary;
using KPIProject.DTO.Menu;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KPIProject.ServicesInterfaces
{
    public interface IDictionaryService
    {
        Task<IEnumerable<DimensionsDictionaryDTO>> GetDimensionsDictionary();
        Task<IEnumerable<FGetTierListByDim_ResultDTO>> GetTierDictionaryToDimension(short? dimensionId);

    }
}