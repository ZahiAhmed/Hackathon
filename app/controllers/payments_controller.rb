class PaymentsController < ApplicationController
    protect_from_forgery except: :create

    def create
        # set up Stripe secret key
        Stripe.api_key = Rails.application.config.stripe[:secret_key]

        # Token is created using Stripe.js
        token = params[:token]

        begin
            charge = Stripe::Charge.create(
                amount: params[:amount],
                currency: 'usd',
                description: 'Donation',
                source: token,
            )

            render json: { message: 'Donation successful' }, status: :created

            # Save the donation details to your database or perform any other necessary actions
            # @donation = Donation.new(
            #     amount: params[:amount],
            #     email: params[:email],
            #     message: params[:message]
            # )

            # if @donation.save 
            #     render json: { message: 'Donation successful' }, status: :created
            # else
            #     render json: { error: 'Failed to save donation' }, status: :unprocessable_entity
            # end

        rescue Stripe::CardError => e
            render json: { error: e.message }, status: :unprocessable_entity
        end
    end
end
