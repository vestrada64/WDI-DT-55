class CreateTweets < ActiveRecord::Migration[5.1]
  def change
    create_table :tweets do |t|
      t.string :handle
      t.text :content

      t.timestamps
    end
  end
end
