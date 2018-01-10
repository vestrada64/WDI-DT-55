class TweetsController < ApplicationController

    def index 
        @tweets = Tweet.all
    end

    def show
        @tweet = Tweet.find(params[:id]) 
    end 

    def new 
        @tweet = Tweet.new 
    end 

    def create
        @new_tweet = Tweet.new(tweet_params)

        if @new_tweet.save
            redirect_to tweets_path 
        else 
            render :new 
        end 
    end

    def edit
        @tweet = Tweet.find(params[:id]) 
    end 

    def update 
        @tweet = Tweet.find(params[:id])

        if @tweet.update_attributes(tweet_params)
            redirect_to tweets_path 
        else
            render :edit
        end 
    end 

    def destroy 
        @tweet = Tweet.find(params[:id])
        @tweet.destroy
        redirect_to tweets_path
    end 


    private 

    def tweet_params
        params.require(:tweet).permit(:content, :handle)
    end

end
