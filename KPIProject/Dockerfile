#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/aspnet:6.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:6.0 AS build
WORKDIR /src
COPY ["KPIProject/KPIProject.csproj", "KPIProject/"]
RUN dotnet restore "KPIProject/KPIProject.csproj"
COPY . .
WORKDIR "/src/KPIProject"
RUN dotnet build "KPIProject.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "KPIProject.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "KPIProject.dll"]