import os
import configparser


class AppConfiguration:
    """Provides the application configuration of the current service."""

    @staticmethod
    def configure():
        """Initializes the application configuration.

        Returns:
            object: The application configuration.
        """
        app_config = configparser.ConfigParser(os.environ)
        app_config.read("./services/api/configurations/app_settings.conf")
        return app_config