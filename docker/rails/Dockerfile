FROM ruby:2.5.1
ENV LANG C.UTF-8
ENV GEM_PACKAGES libxml2-dev libxslt-dev imagemagick
RUN apt-get update \
    && apt-get install --yes --no-install-recommends \
        build-essential \
        libpq-dev \
        libfontconfig1 \
        nodejs \
        vim \
    && rm -rf /var/lib/apt/lists/*
RUN mkdir /app
WORKDIR /app
ADD Gemfile /app/Gemfile
ADD Gemfile.lock /app/Gemfile.lock
RUN bundle install --jobs=4 --retry=5
ADD . /app

