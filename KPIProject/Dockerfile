FROM mcr.microsoft.com/dotnet/core/aspnet:6.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443
FROM mcr.microsoft.com/dotnet/core/sdk:6.0-buster AS build
WORKDIR /src
COPY ["./KPIProject.csproj", "src/"]
RUN dotnet restore "src/KPIProject.csproj"
COPY . .
WORKDIR "/src/"
RUN dotnet build "KPIProject.csproj" -c Release -o /app/build
FROM build AS publish
RUN dotnet publish "KPIProject.csproj" -c Release -o /app/publish
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "KPIProject.dll"]