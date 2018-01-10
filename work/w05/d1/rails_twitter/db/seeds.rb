# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Tweet.create([
    {
        handle: "@realJoeSmith",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eros est, blandit quis enim id metus."
    }, 
    {
        handle: "@foxygen",
        content: "Sed ornare pellentesque elementum"
    },
    {
        handle: "@arv",
        content: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos"
    }, 
    {
        handle: "@lvh",
        content:"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain"
    }
])