class CheckSeason


  def self.season(month)
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

puts CheckSeason.season("march")
