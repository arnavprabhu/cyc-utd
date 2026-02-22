from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    sendgrid_api_key: str
    notion_token: str
    notion_database_id: str
    cors_origins: str = "http://localhost:3000"

    class Config:
        env_file = ".env"

    @property
    def cors_origins_list(self) -> list[str]:
        return [o.strip() for o in self.cors_origins.split(",") if o.strip()]


settings = Settings()
