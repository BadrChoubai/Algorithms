class CheckSeason
  def self.season_for(month)
    month = month.downcase
    
    case month
    in "march" | "april" | "may"
      "Spring"
    in "june" | "july" | "august"
      "Summer"
    in "september" | "october" | "november"
      "Fall"
    in "december" | "january" | "february"
      "Winter"
    end
  end
end

puts CheckSeason.season_for("march")
puts CheckSeason.season_for("august")
puts CheckSeason.season_for("october")
puts CheckSeason.season_for("february")
